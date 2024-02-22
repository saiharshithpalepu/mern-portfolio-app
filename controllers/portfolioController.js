const sendEmailController =(req,res)=>{
    try{
        console.log("entered into controller")
       return res.status(200).send({
        success:true,
        message:"your message sent successfully"
       });
    }catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"send email api error",
        })
    }

}

module.exports = {sendEmailController}