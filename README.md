# SPL-420 Meta-Protocol
SPL-420 is a new open-source, free & fair launch NFT standard made possible by LibrePlex Solscriptions. **NOT IN ANY WAY AFFILIATED WITH SOLANA LABS OR PART OF THE SOLANA PROGRAM LIBRARY.**

Anyone can deploy an SPL-420 NFT collection as long as they adhere to the protocol specifications below.

Additionally, anyone can mint an SPL-420 NFT on a **first is first** basis, only the first byte perfect image inscribed will be indexed in the official collection, don't mint duplicates or you'll be wasting your SOL!

**TOKEN MINTERS** if you are looking to mint a newly launched SPL-420 fair launch NFT follow these instructions:
- Go to the collections folder in this repo and find the folder of the collection you want to mint, it will contain all the files you need.
- Grab your favorite image from the "images" or "highres-offchain" folder & ensure it isn't already inscribed **(Currently there is no tool on Solana that enables this)**
- If it is not yet inscribed, use "https://solscribe.io" (recommended) or "https://launchmynft.io/tools/mint" or "https://biblio.tech/" or "https://sol-tools.tonyboyle.io/nft-tools/create-nft" to mint a new NFT with the following metadata parameters.
   - **Image:** Upload the unique image as the main NFT image. **THIS STEP IS MANDATORY**
   - **Name:** ```YOLOMIGOS #4268``` (Replace "4268" with the number exactly as it appears in the png file name from 0-4268). **MANDATORY**
   - SYMBOL: ```YOLO``` ***OPTIONAL***
   - DESCRIPTION: ```YOLO``` ***OPTIONAL***
   - **ROYALTIES:** Set to 0% **MANDATORY**
   - **MUTABILITY:** False / Off (Check advanced settings for this on Sol-Tools or toggle off for Biblio). **MANDATORY**
- Mint the NFT for 0.027 SOL (This is a MetaPlex fee. In the future we will transition to LibrePlex NFT standard which is free of protocol level fees like this).
- Head to https://www.libreplex.io/inscriptions to inscribe the SPL-420 NFT.
   - Click "Inscribe Yours" > "Use Wallet Contents" > "Fetch Mints" to load the NFTs in your wallet. On the SPL-420 NFT you just made click the button that says "Create Inscription".
   - Initialize the inscription account.
   - **IMPORTANT** If the project requries a low-res on-chain image, choose custom and upload the 1:1 pixel dimension version of the png file provided in the "inscribe-onchain" folder (matching the filename of the highres). Or if there is only an "images" folder, skip to the next step.
   - Click Resize to change the account size and rent will be charged depending on the file size of the image (no one receives this fee, it gets locked away forever). Be careful not to lock your SOL this way by inscribing the wrong image.
   - Click Inscribe to add the image data on chain.
   - Now that is complete and you can close the inscribe window. Click the magnifying glass. First ensure you see the image is being displayed properly on-chain. If it does you can set it to immutable!
   - If you did something wrong, go back to the upload and re-upload the png file, click update image, then resize, then inscribe again, then had back to the scanner to reclaim the rent. THEN you can make it immutable. Once you make it immutable you can never claim the rent back.
- That's it! If you inscribed the first version of that unique image, your inscription will be valid!

**PROJECT CREATORS** if you are creating an SPL-420 fair mint NFT collection follow these instructions:
- Create a new wallet to serve as the deploy wallet.
- Make two copies of your NFT collection images, one at 1:1 pixel dimensions and one high res. Put the 1:1px image files inside a folder named "inscribe-onchain" and put the high res image files inside a folder name "highres-offchain". Or if your artwork is not a large file size you can just put a single copy of the collection inside a folder called "images".
- Fork this repo and create a pull request after adding a folder with your collection images inside. Collection names must be unique but there is no character limit. Do not change anything else aside from adding your folder or your PR will be rejected.
- Once the PR has been merged the information is made public and you can launch whenever you like! We suggest minting some yourselves as the team allocation not exceeding 10% of the supply (following the above instructions).
- That's it! Your SPL-420 NFT collection is officially fair-launched and any solscriptions enjoyers can begin minting.
- **WARNING** PROJECT CREATORS ARE RESPONSIBLE FOR INDEXING THEIR OWN COLLECTION. CURRENTLY THERE IS NO BYTE-PERFECT IMAGE HASH CHECKER FOR SOLANA INSCRIPTIONS. SO USING THIS META-PROTOCOL IS EXTREMELY DIFFICULT TO INDEX UNTIL A TOOL IS BUILT FOR THIS.
- Visit create.tensor.trade and/or creators.magiceden.io to submit your collection after you verify your hash list!

If you'd like assistance launching your SPL-420 collection we can help! Just hop on the PixelPushers Discord: https://discord.com/invite/RgtFus49A2

![](yolomigos.png)
