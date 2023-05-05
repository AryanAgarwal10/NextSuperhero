import dbconnect from "@/db/dbconnect";

import Hero from '@/model/Hero'

dbconnect()

export default async(req,res)=> {
    const{
        query:{id},
        method
    }=req
    switch(method){
        case 'GET':
            try{
                const hero= await Hero.findById(id)
                if(!hero){
                    res.status(400).json({success:false})
                }
                else{
                    res.status(200).json({success:true, hero : hero})
                }
            }
            catch(error){
                res.status(400).json({success:false})
            }
            break;
        case 'PUT':
            try{
                const hero= await Hero.findByIdAndUpdate(id,req.body,{
                    new:true,
                    runValidators:true
                })
                if(!hero){
                    console.log('No hero found')
                    res.status(400).json({success:false})
                }
                else{
                    res.status(200).json({success:true, hero : hero})
                }
            }
            catch(error){
                console.log(error)
                res.status(400).json({success:false})
            }
            break;

            case 'DELETE':
                try{
                    const hero= await Hero.deleteOne({_id: id})
                    if(!hero){
                        res.status(400).json({success:false})
                    }
                    else{
                        res.status(200).json({success:true, hero : hero})
                    }
                }
                catch(error){
                    res.status(400).json({success:false})
                }
                break;
        default:
            res.status(400).json({success:false})
        break;
    }
}