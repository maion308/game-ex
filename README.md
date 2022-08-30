# Project status
bare bones created. Active in progress

# GameEXpedia

This interactive application lets your post game reviews for PS5.

## Installation

Use [git clone](https://github.com/maion308/game-ex.git) to download this repo

```zsh
git clone https://github.com/maion308/game-ex.git
cd game-ex
npm i
```

# Instructions
once you have the repository local on your machine, create a folder inside within the public folder and call it images.

unzip the com.images.zip folder and move all the images into the images folder. The gameList.js file already has the proper images path set to the images folder if you  want to place the images elsewhere make sure to update the path in the gameList.js file

## Usage

```node
import path from 'path'
import {fileURLToPath} from 'url'

#allows you to assign __dirname 
#to the current path
#which allows you to use path.join 
#an ESM work around to enable use of __dirname
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)