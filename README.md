# SPL420 Meta-Protocol
SPL-420 Standard for the Solscriptions Meta Protocol

SPL-420 is a new open-source, free & fair launch NFT standard made possible by LibrePlex Solscriptions. Anyone can deploy an SPL-420 NFT collection as long as they adhere to the protocol specifications below. These standards are in place so that the tokens are immediately tradable after mint on traditional Solana secondary marketplaces with our without inscription integration such as https://tensor.trade or https://magiceden.io

**TOKEN MINTERS** if you are looking to mint a newly launched SPL-420 token follow these instructions:
- Go to the collections folder in this repo and find the folder of the collection you want to mint, it will contain all the files you need.
- Grab your favorite image from the "inscribe-onchain" folder & ensure it isn't already inscribed using Libreplex's tool here https://
- If it is not yet inscribed, use "https://biblio.tech/" or "https://sol-tools.tonyboyle.io/nft-tools/create-nft" to mint a new NFT with the following metadata parameters.
   - **Image:** Upload the provided **HIGH RES** png inside the "mint-offchain" folder as the main NFT image. **THIS STEP IS MANDATORY**
   - **Name:** ```YOLOMIGOS #4268``` (Replace "4268" with the number exactly as it appears in the png file name from 0-4268). **MANDATORY**
   - **ROYALTIES:** Set to 0% **MANDATORY**
   - **CREATORS:** ```SOLSeeX8YX5TqmkRm1YgBEjdcrZ3q4pYXo8Hbom294b``` (Use the provided creator address within the creator.txt file.) **MANDATORY**
   - **COLLECTION:** ```G4tVHkeptBw8bXXamYFbhw6wuwB1vnyS5XpGZDK78ak``` (Use the provided collection address within the collection.txt file.) **MANDATORY**
   - **MUTABILITY:** False / Off (Check advanced settings for this on Sol-Tools or toggle off for Biblio). **MANDATORY**
- Mint the NFT for 0.027 SOL (This is a MetaPlex fee. In the future we will transition to LibrePlex NFT standard which is free of protocol level fees like this).
- Head to https://www.libreplex.io/inscriptions to inscribe the SPL-420 NFT.
   - Click "Inscribe Yours" > "Use Wallet Contents" > "Fetch Mints" to load the NFTs in your wallet. On the SPL-420 NFT you just made click the button that says "Create Inscription".
   - Initialize the inscription account.
   - **IMPORTANT** Choose custom and upload the 1:1 pixel dimension version of the png file provided in the "inscribe-onchain" folder (matching the filename of the highres). Make sure to click update image after or it will not register the new file and it will instead inscribe the HIGH RES image and you'll be overcharged for rent. Do not inscribe the HIGH RES image.
   - Once you update the final byte size displayed should be anywhere from 500b-2kb. Click Resize to change the account size and the rent will be reduced (no one receives this fee, it gets locked away forever). Be careful not to lock your SOL this way by inscribing the wrong image.
   - Click Inscribe to add the image data on chain.
   - Now that is complete and you can close the inscribe window. Click the magnifying glass. First ensure you see the image is being displayed properly on-chain. If it does you can set it to immutable!
   - If you did something wrong, go back to the upload and re-upload the png file, click update image, then resize, then inscribe again, then had back to the scanner to reclaim the rent. THEN you can make it immutable. Once you make it immutable you can never claim the rent back.
- That's it!

**PROJECT CREATORS** if you are creating an SPL-420 fair mint NFT collection follow these instructions:
- Create a new wallet to serve as the deploy wallet. Save the public address as creator.txt This will be used to index the collection. ```SOLSeeX8YX5TqmkRm1YgBEjdcrZ3q4pYXo8Hbom294b```
- A master MCC NFT must be minted from this deploy wallet. Use "https://biblio.tech/" or "https://sol-tools.tonyboyle.io/nft-tools/create-nft". Ensure the royalties are set to 0% for the collection for maximum tradability (we recommend minting some supply as the project creators instead of setting royalties). Save the mint ID of this master NFT as collection.txt This will also be used to index the collection. ```G4tVHkeptBw8bXXamYFbhw6wuwB1vnyS5XpGZDK78ak``` Choose an image that serves as the thumbnail for your collection on marketplaces.
- Make two copies of your NFT collection images, one at 1:1 pixel dimensions and one high res. Put the 1:1px image files inside a folder named "inscribe-onchain" and put the high res image files inside a folder name "mint-offchain".
- Fork this repo and create a pull request after adding a folder with your collection name and the following files inside. Collection names must be unique but there is no character limit. Do not change anything else aside from adding your folder or your PR will be rejected.
   - collection.txt
   - creator.txt
- Once the PR has been merged the information is made public and you can launch whenever you like by inscribing the deploy NFT at "https://www.libreplex.io/inscriptions" we suggest not deploying sooner than this step or someone may see it being inscribed and try to front run the mint.
   - Inscribe the MCC collection NFT https://www.libreplex.io/inscriptions by clicking "Inscribe Yours" > "Use Wallet Contents" > "Fetch Mints" to load the NFT in your wallet. On the MCC NFT click the button that says "Create Inscription".
   - Intialize the inscription account.
   - Inscribe your MCC NFT image or a low-res version at your discretion.
   - Click update image or it will not register the newly uploaded file and you may be overcharged for rent.
   - Resize the account to fit the low res file.
   - Inscribe the MCC image file!
   - Now that is complete and you can close the inscribe window. Click the magnifying glass on the inscription and set it to immutable. If you accidentally locked up too much rent you can reclaim it here, but only while it is mutable, once you make it immutable you can never claim back the rent.
- That's it! Your SPL-420 NFT collection is officially fair-launched and any solscriptions enjoyers can begin minting.