
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const createHearts = () => {
      const newHearts = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6
      }));
      setHearts(newHearts);
    };

    createHearts();
    const interval = setInterval(createHearts, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-float absolute"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart size={16} fill="currentColor" />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
