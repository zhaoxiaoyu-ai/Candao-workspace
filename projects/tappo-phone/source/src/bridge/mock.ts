import type { BridgeRequest } from './types'

function resolveLater(id: string, payload: unknown, delay = 280) {
  window.setTimeout(() => window.TappoPhoneBridge?.resolve(id, payload), delay)
}

export function installMockBridge() {
  if (window.FlutterBridge) return

  window.FlutterBridge = {
    postMessage(message: string) {
      const request = JSON.parse(message) as BridgeRequest & { id: string }

      if (request.type === 'scan') {
        resolveLater(request.id, { code: 'TP-DEMO-402874' })
        return
      }

      if (request.type === 'getDeviceInfo') {
        resolveLater(request.id, { deviceId: 'mock-ios-webview', safeAreaBottom: 24, platform: 'ios' })
        return
      }

      if (request.type === 'pay') {
        resolveLater(request.id, { status: 'pending', transactionId: `KPAY-${request.orderId}` }, 520)
        return
      }

      resolveLater(request.id, { ok: true })
    },
  }
}
