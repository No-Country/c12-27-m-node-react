import { Schema, Types, model, Model } from 'mongoose';
import { Article } from '../interfaces/article.interface';

const ArticleSchema = new Schema<Article>({
  name: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  serialCode: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

const ArticleModel = model('articles', ArticleSchema);
export default ArticleModel;
