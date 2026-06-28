export type BridgeRequest =
  | { type: 'scan' }
  | { type: 'getDeviceInfo' }
  | { type: 'openExternal'; url: string }
  | { type: 'copy'; text: string }
  | { type: 'close' }
  | { type: 'back' }
  | { type: 'pay'; orderId: string; amount: number; method: string }
  | { type: 'haptic'; style: 'light' | 'medium' | 'success' | 'warning' }

export type BridgeResponseMap = {
  scan: { code: string }
  getDeviceInfo: { deviceId: string; safeAreaBottom: number; platform: 'ios' | 'android' | 'web' }
  openExternal: { ok: true }
  copy: { ok: true }
  close: { ok: true }
  back: { ok: true }
  pay: { status: 'pending' | 'paid' | 'failed'; transactionId?: string }
  haptic: { ok: true }
}

export type FlutterBridge = {
  postMessage?: (message: string) => void
}

declare global {
  interface Window {
    FlutterBridge?: FlutterBridge
    TappoPhoneBridge?: {
      resolve: (id: string, payload: unknown) => void
      reject: (id: string, message: string) => void
    }
  }
}
