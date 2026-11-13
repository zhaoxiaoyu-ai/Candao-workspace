# T16 Follow-up - Restore Original App Activation Modal

## Reason

User pointed out that the original `應用服務中心 / 應用開通 / 服務激活` modal should not be overwritten by the new `訂座管理` activation flow. These are two different application-opening flows.

## Correction

Restored original service activation frames:

- `903:17214` - `應用服務中心/應用開通/服務激活`
- `903:18776` - `應用服務中心/應用開通/服務激活/確認開通提示`
- `919:19848` - `應用服務中心/應用開通/服務激活/確認開通提示-可確認`

Moved the booking activation flow to separate frames:

- `2093:32399` - `應用服務中心/應用開通/訂座管理開通/服務激活-Tappo Reservation`
- `2093:32853` - `應用服務中心/應用開通/訂座管理開通/服務激活-Minitable 待準備`
- `2093:33329` - `應用服務中心/應用開通/訂座管理開通/服務激活-Minitable 已就緒`
- `2071:30246` - `應用服務中心/應用開通/訂座管理開通/門店未選校驗`
- `2071:30743` - `應用服務中心/應用開通/訂座管理開通/Minitable未完成校驗`
- `2071:31240` - `應用服務中心/應用開通/訂座管理開通/開通成功-Tappo`
- `2071:31737` - `應用服務中心/應用開通/訂座管理開通/開通成功-Minitable`

## Prototype Routing

- `三方外賣連接` card in `39:563` now routes to original service activation `903:17214`.
- `訂座管理` card in `39:563` now routes to booking activation `2093:32399`.
- Original service activation confirm routes to `903:18776`.
- Booking Tappo supplier switch routes to `2093:32853`.
- Booking Minitable authorization/ready path routes to `2093:33329`.
- Booking validation states route back to the new booking nodes, not the restored original nodes.

## Final Audit

- Original activation has old app copy: `true`
- Original confirm has old warning copy: `true`
- Booking activation has booking copy: `true`
- Booking copy leak inside restored original modals: `0`
- Invalid prototype destinations found in this correction pass: `0`

## Screenshots

- `t16-restore-original-service-activation.png`
- `t16-restore-original-confirm.png`
- `t16-booking-activation-separated-tappo.png`

## Notes

This follow-up corrects the ownership boundary: restored original frames remain for the `三方外賣鏈接` app, and the new `訂座管理` flow lives on separate frames.
