export default function LoadingDots({
  size = 8,
  color = "bg-blue-600",
  className = "",
}) {
  const dotSize = `h-${size} w-${size}`;

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span
        className={`${dotSize} rounded-full ${color} animate-bounce`}
      />
      <span
        className={`${dotSize} rounded-full ${color} animate-bounce`}
        style={{ animationDelay: "120ms" }}
      />
      <span
        className={`${dotSize} rounded-full ${color} animate-bounce`}
        style={{ animationDelay: "240ms" }}
      />
    </div>
  );
}