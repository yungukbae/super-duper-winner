import "./page.css";
import Image from "next/image";

export default function Home() {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <main className="flex flex-row gap-8 justify-center flex-wrap p-8">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="flex justify-between w-full h-full flex-col bg-[#ffe012] p-4">
              <span className="text-right text-2xl font-bold">17</span>
              <span className="text-left text-4xl">Aug</span>
            </div>
          </div>
          <div className="flip-card-back">back</div>
        </div>
      </div>
    </main>
  );
}
