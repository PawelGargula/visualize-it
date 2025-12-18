import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import TextArea from "./components/text-area";
import SubmitButton from "./components/submit-button";
import CharsCounter from "./components/chars-counter";

const MAX_CHARS = 2000;

function App() {
  const [value, setValue] = useState<string>('');

  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-br from-white via-yellow-50 to-white">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4" style={{color: '#D4AF37'}}>
              Transform Your Stories into Visual Masterpieces
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Describe your imagination, and we'll breathe life into it with AI-powered visualization
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold" style={{color: '#BF9B30'}}>How It Works</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Write a detailed description of your scene</li>
                  <li>Our AI generates a unique visualization</li>
                  <li>Refine and regenerate as needed</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold" style={{color: '#BF9B30'}}>Token System</h2>
                <div className="text-gray-700">
                  <p>Each visualization costs tokens:</p>
                  <p className="font-bold">5 tokens per generation</p>
                  <a href="#" className="hover:underline" style={{color: '#D4AF37'}}>Purchase Tokens</a>
                </div>
              </div>
            </div>
          </section>

          <form action={async (formData) => {
            await new Promise((resolve) => {
              setTimeout(() => {
                console.log('Form submitted:', formData.get('chat'));
                resolve(true);
              }, 5000);
            });
          }}>
            <div className="rounded-2xl shadow-lg">
              <TextArea 
                maxLength={MAX_CHARS}
                value={value} 
                setValue={setValue}
                placeholder="Describe the scene you want to visualize. Be detailed and creative! Example: 'A serene mountain landscape at sunset, with a crystal lake reflecting the orange and purple sky...'"
              />
              <Divider />
              <div className="border-b border-x border-slate-300 justify-between flex gap-2 p-4 rounded-b-2xl w-full">
                <CharsCounter current={value.length} max={MAX_CHARS} />
                <SubmitButton isActive={value.length > 0} />
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
      <video src="/front/media/default-video.8a28657a.mp4" autoPlay={true} loop={true} playsInline={true} className="w-full h-full object-cover" width={672} height={378} preload="metadata"> Download the <a href="/front/media/default-video.8a28657a.mp4" className="underline text-blue-600">video file</a>. </video>
    </div>
  )
}

export default App

function Divider() {
  return (
    <div className="px-4 border-x border-slate-300">
      <div className="border-b border-slate-200"></div>
    </div>
  )
}