import { test } from 'vitest';

import { timestampAnnotationTypeSchema } from '../src/bioformats2raw'

test('String dates are correctly coerced', () => {
  timestampAnnotationTypeSchema.parse(
    { 'Value': '2016-03-15T12:42:24.313', 'ID': '1' }
  )
})
