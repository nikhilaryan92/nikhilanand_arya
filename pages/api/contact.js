export default async function handler(req, res){
if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})
try{
const data = req.body
// Here you can add mail sending logic (e.g., using SMTP or services) or store message in DB
console.log('Contact form received:', data)
return res.status(200).json({ok:true})
}catch(err){
console.error(err)
return res.status(500).json({error:'Server error'})
}
}