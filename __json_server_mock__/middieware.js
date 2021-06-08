module.exports = (req,res,next) =>{
    console.log(req.method,req.body);
    if(req.method === 'POST' && req.path === '/login'){
        if(req.body.username === 'jack' && req.body.password === '123456'){
            return res.status(200).json({
                user:{
                    token:'token_hahahhdeeededed',
                }
            })
        }
        else{
            return res.status(400).json({
                "err":"username/password error!"
            })
        }
    }
}