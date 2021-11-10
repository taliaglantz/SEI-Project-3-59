import User from '../models/user.js'

export const getUserProfile = async (req, res) => {
  try {
    const user = await (await User.findById(req.currentUser._id)).populate('createdExperiences')
    if (!user) throw new Error()
    return res.status(200).json(user)
    // console.log('User ->', user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'not found' })
  }
}