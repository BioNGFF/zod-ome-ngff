---
"zod-ome-ngff": minor
---

Add RFC-4 axis orientation, and stop v0.6 dropping axis units.

Spatial axes may now carry an `orientation` of `{ type: "anatomical", value }`, where
`value` is one of the 24 direction pairs RFC-4 defines. Accepted on v0.4, v0.5 and v0.6,
since the RFC names no NGFF version.

The v0.6 fix is the same edit: `CoordinateSystemSchema` reached its axes through a
second, reduced axis schema declaring only `name` and `type`, so `unit` was stripped
from every v0.6 image. It now uses the same `Axis` as the other versions.
