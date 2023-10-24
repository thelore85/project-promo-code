'use client'

export default function testPage({ test }) {
  console.log('test:', test);

  return (
    <div>
      <h2>Test page</h2>
      <p>variabile: {test}</p>
    </div>
  );
}
