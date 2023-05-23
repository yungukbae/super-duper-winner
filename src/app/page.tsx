import "./page.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="w-full h-full bg-[#ffe012] p-8">
              <span className="text-3xl">Aug</span>
            </div>
          </div>
          <div className="flip-card-back">back</div>
        </div>
      </div>
    </main>
  );
}
