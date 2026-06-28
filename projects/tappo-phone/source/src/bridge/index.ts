import type { BridgeRequest, BridgeResponseMap } from './types'

type PendingRequest = {
  resolve: (value: unknown) => void
  reject: (reason?: unknown) => void
}

const pending = new Map<string, PendingRequest>()

function createId() {
  return `tp_${Date.now()}_${Math.random().toString(16).slice(2)}`
}

window.TappoPhoneBridge = {
  resolve(id, payload) {
    pending.get(id)?.resolve(payload)
    pending.delete(id)
  },
  reject(id, message) {
    pending.get(id)?.reject(new Error(message))
    pending.delete(id)
  },
}

export async function callBridge<T extends BridgeRequest['type']>(
  request: Extract<BridgeRequest, { type: T }>,
): Promise<BridgeResponseMap[T]> {
  const id = createId()
  const envelope = { id, ...request }

  if (!window.FlutterBridge?.postMessage) {
    return Promise.reject(new Error(`Flutter bridge is not available for ${request.type}`))
  }

  return new Promise((resolve, reject) => {
    pending.set(id, { resolve: resolve as (value: unknown) => void, reject })
    window.FlutterBridge?.postMessage?.(JSON.stringify(envelope))
  }) as Promise<BridgeResponseMap[T]>
}
