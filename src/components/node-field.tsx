export function NodeField({ className }: { className?: string }) {
  const nodes = [
    [40, 60],
    [120, 36],
    [200, 72],
    [280, 28],
    [340, 90],
    [80, 150],
    [170, 170],
    [260, 140],
    [320, 190],
    [50, 240],
    [140, 260],
    [230, 230],
    [310, 270],
    [90, 330],
    [190, 320],
    [280, 340],
  ] as const;

  const edges: Array<[number, number]> = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [0, 5],
    [1, 6],
    [2, 6],
    [2, 7],
    [4, 8],
    [5, 6],
    [6, 7],
    [7, 8],
    [5, 9],
    [6, 10],
    [7, 11],
    [8, 12],
    [9, 10],
    [10, 11],
    [11, 12],
    [9, 13],
    [10, 14],
    [11, 14],
    [12, 15],
    [13, 14],
    [14, 15],
  ];

  return (
    <svg
      viewBox="0 0 380 380"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.35"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 5 === 0 ? 4.5 : 2.75}
          fill="currentColor"
          opacity={i % 5 === 0 ? 0.9 : 0.55}
        />
      ))}
    </svg>
  );
}
