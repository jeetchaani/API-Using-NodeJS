
const register = (req,res) =>{
    return res.status(201).json({ msg: "Working" });
}

module.exports = { register };