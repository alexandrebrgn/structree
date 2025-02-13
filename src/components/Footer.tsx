import {GithubIcon, InstagramIcon, RainbowIcon, TwitterIcon} from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full h-auto flex justify-between border-t p-4">
      <div className="flex items-center justify-center gap-2">
        <RainbowIcon/>
        <p className="underline">Made by Alexandre Bourguignon</p>
      </div>
      <div className="flex gap-6">
        {/* Github */}
        <div className="flex align-middle items-center gap-1">
          <div className="h-8 w-8 flex items-center justify-center rounded-4xl bg-black text-white">
            <GithubIcon/>
          </div>
          <p>Gihtub</p>
        </div>
        {/* Instagram */}
        <div className="flex align-middle items-center gap-1" onClick={() => window.location.href = "www.google.com"}>
          <div
            className="h-8 w-8 flex items-center justify-center rounded-4xl bg-linear-to-br from-[rgba(252,241,0,1)] via-[rgba(255,0,254,1)] to-[rgba(0,142,255,1)] text-white">
            <InstagramIcon/>
          </div>
          <p>Instagram</p>
        </div>
        {/* Spotify */}
        <div className="flex align-middle items-center gap-1">
          <div className="h-8 w-8 flex items-center justify-center rounded-4xl bg-blue-400 text-white">
            <TwitterIcon/>
          </div>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  )
}