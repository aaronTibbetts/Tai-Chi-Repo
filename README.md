1. Install nvm : curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   then restart your terminal.
2.Install and use Node 20
  nvm install 20
  nvm use 20
  nvm alias default 20
  node --version  # Should show v20.x.x
3. clone this repo
4. Install dependenices: npm install
5. touch .env
   add following to the file
 GEMINI_API_KEY=your_gemini_api_key_here
ELEVEN_API_KEY=your_elevenlabs_api_key_here
ELEVEN_VOICE_ID=your_voice_id_here
ELEVEN_OUTPUT_FORMAT=wav_24000
USE_ELEVEN_TTS=true
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
ELEVENLABS_VOICE_ID=your_voice_id_here

(dont commit the .env file)
6. run dev server: npm run dev
open: http://localhost:9002/ in browser
