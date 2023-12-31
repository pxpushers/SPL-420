# SPL420 Meta-Protocol
### SPL420 is an open-source, fair launch NFT meta-protocol for Solscription digital art collections. Inspired by Ordinal Inscription collections such as Bitcoin Frogs. **NOT IN ANY WAY AFFILIATED WITH SOLANA LABS OR PART OF THE SOLANA PROGRAM LIBRARY.**

Anyone can deploy an SPL420 NFT collection as long as they adhere to the protocol specifications below.

Additionally, anyone can mint an SPL420 NFT on a **first is first** basis, only the first byte perfect image inscribed will be indexed in the official collection, don't mint duplicates or you'll be wasting your SOL! For project creators we recommend minting your own allocation of no more than 10% of the supply to derive value from the project and create shared incentives with holders. Or if you don't have the capital to mint your own supply then a small secondary royalty % is suggested between 0.01-3%. (You should only choose one of these options, not both combined).

## **PROJECT CREATORS** if you are creating an SPL420 fair mint NFT collection follow these instructions:
- Create a new wallet to serve as the deploy wallet.
- Optimize your images so that they are as small of a file size as possible, suggested pixel dimensions at least 300x300px. Suggested file size ~1kb.
- Make your images publicly accessible & downloadable.
- You can fork this repo and create a pull request after adding a folder with your collection images inside if you like. Collection names must be unique (not case sensitive) so that you don't overwrite another collection folder. Do not change anything else aside from adding your images folder or your PR will be rejected.
- Once the PR has been merged the information is made public the launch is live!
- That's it! Your SPL420 NFT collection is officially fair-launched and any solscriptions enjoyers can begin minting, at this stage we suggest minting your team allocation and then promoting the launch however you see fit.
- **WARNING** PROJECT CREATORS ARE RESPONSIBLE FOR INDEXING THEIR OWN COLLECTION. CURRENTLY THERE IS NO BYTE-PERFECT IMAGE HASH CHECKER FOR SOLANA INSCRIPTIONS. SO USING THIS META-PROTOCOL IS EXTREMELY DIFFICULT TO INDEX UNTIL TOOLING IS BUILT FOR THIS PURPOSE.
- Visit create.tensor.trade and/or creators.magiceden.io to submit your collection after you verify your hash list!

## **TOKEN MINTERS** if you are looking to mint a newly launched SPL420 fair launch NFT follow these instructions:
- Go to the collections folder in this repo and find the folder of the collection you want to mint, it will contain all the files you need.
- Grab your favorite image from the "images" folder & ensure it isn't already inscribed **(Currently there is no tool on Solana that enables this)**
- If it is not yet inscribed, use "https://solscribe.io" (recommended) or "https://launchmynft.io/tools/mint" or "https://biblio.tech/" or "https://sol-tools.tonyboyle.io/nft-tools/create-nft" to mint a new NFT with the following metadata parameters.
   - **Image:** Upload the unique image as the main NFT image. **THIS STEP IS MANDATORY**
   - **Name:** ```YOLOMIGOS #4268``` (Replace "4268" with the number exactly as it appears in the png file name from 0-4268). **MANDATORY**
   - SYMBOL: ```YOLO``` ***OPTIONAL***
   - DESCRIPTION: ```YOLO``` ***OPTIONAL***
   - **ROYALTIES:** Set to the project's royalty % **MANDATORY**
   - **MUTABILITY:** False / Off (Check advanced settings for this on Sol-Tools or toggle off for Biblio). **MANDATORY**
- Mint the NFT for 0.023 SOL (This is a MetaPlex fee. In the future we will transition to LibrePlex NFT standard which is free of protocol level fees like this).
- Head to https://www.libreplex.io/inscriptions to inscribe the SPL420 NFT.
   - Click "Inscribe Yours" > "Use Wallet Contents" > "Fetch Mints" to load the NFTs in your wallet. On the SPL420 NFT you just made click the button that says "Create Inscription".
   - Initialize the inscription account.
   - **IMPORTANT** If the project requries a low-res on-chain image, choose custom and upload the 1:1 pixel dimension version of the png file provided in the "inscribe-onchain" folder (matching the filename of the highres). Or if there is only an "images" folder, skip to the next step.
   - Click Resize to change the account size and rent will be charged depending on the file size of the image (no one receives this fee, it gets locked away forever). Be careful not to lock your SOL this way by inscribing the wrong image.
   - Click Inscribe to add the image data on chain.
   - Now that is complete and you can close the inscribe window. Click the magnifying glass. First ensure you see the image is being displayed properly on-chain. If it does you can set it to immutable!
   - If you did something wrong, go back to the upload and re-upload the png file, click update image, then resize, then inscribe again, then had back to the scanner to reclaim the rent. THEN you can make it immutable. Once you make it immutable you can never claim the rent back.
- That's it! If you inscribed the first version of that unique image, your inscription will be valid!

If you'd like assistance launching your SPL420 collection we can help! Just hop on the PixelPushers Discord: https://discord.com/invite/RgtFus49A2

![](yolomigos.png)
