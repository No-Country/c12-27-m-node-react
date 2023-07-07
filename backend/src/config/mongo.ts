import 'dotenv/config'
import { connect } from 'mongoose'
const { DB_URI } = process.env

const dbConnect = async (): Promise<void> => {
  try {
    if (!DB_URI) throw new Error('DB_URI no está definida en el archivo .env')

    await connect(<string>DB_URI)
  } catch (error) {
    console.log(error)
  }
}

export default dbConnect
