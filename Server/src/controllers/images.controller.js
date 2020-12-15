import path from "path";

export const viewImgUser = async (req, res) => {
    try {
        const filename = req.params.img;
        console.log(filename);
        const pathImg = path.join(__dirname, `../public/user/${filename}`);
        console.log(pathImg);
        res.sendFile( pathImg );
    } catch (error) {
        return res.status(403).json({message: "image no existe"});
    }
};