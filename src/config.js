"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
	"After Saving earth numerous time Kid Goku goes on the coolest vacation";
const baseUri = "ipfs://QmVeU3HvHbMfTjzNFDUA3iBaKbroEuRUQppnVAY91vhZ88";

const layerConfigurations = [
	{
		growEditionSizeTo: 50,
		layersOrder: [
			{ name: "Background" },
			{ name: "Goku_Base" },
			{ name: "Goku_Outfit" },
			{ name: "Goku_Chain" },
			{ name: "Goku_Earring" },
			{ name: "Goku_Eyes" },
		],
	},
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
	width: 1000,
	height: 1000,
};

const background = {
	generate: true,
	brightness: "80%",
};

const extraMetadata = {
	design: "Evandro Delgado",
	surname: "Blackdelga",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
	thumbPerRow: 5,
	thumbWidth: 50,
	imageRatio: format.width / format.height,
	imageName: "preview.png",
};

module.exports = {
	format,
	baseUri,
	description,
	background,
	uniqueDnaTorrance,
	layerConfigurations,
	rarityDelimiter,
	preview,
	shuffleLayerConfigurations,
	debugLogs,
	extraMetadata,
};
