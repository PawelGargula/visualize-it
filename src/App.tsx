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
    <div className="min-h-dvh flex flex-col">
     <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
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
            />
            <Divider />
            {/* Bottom bar */}
            <div className="border-b border-x border-slate-300 justify-between flex gap-2 p-4 rounded-b-2xl w-full">
              <CharsCounter current={value.length} max={MAX_CHARS} />
              <SubmitButton isActive={value.length > 0} />
            </div>
          </div>
        </form>
      </main>
      <Footer />
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