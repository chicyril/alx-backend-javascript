export default function createInt8TypedArray(length, position, value) {
  const elementsRange = length / Int8Array.BYTES_PER_ELEMENT;
  if (position >= elementsRange) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  // const typedArrayView = new Int8Array(buffer);
  // typedArrayView[position] = value;
  const dataView = new DataView(buffer);
  dataView.setInt8(position, value, true);
  return dataView;
}
