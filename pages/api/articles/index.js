// Can make database call in here or Prisma
import { articles } from '../../../data';

export default function handler(req, res){
    // Can return data from database or anything
    res.status(200).json(articles);
}