import Teaser from './Teaser'
import Feature from './Feature'
import FeaturedPosts from './FeaturedPosts'
import Grid from './Grid'
import Placeholder from './Placeholder'
import PostsList from './PostsList'
import Page from './Page'
import BlogPost from './BlogPost'
import Text from './Text'
import Movie from './Movie'
import Personality from './Personality'
import Studio from './Studio'
import Genre from './Genre'
import Country from './Country'
import NewsItem from './NewsItem'
import FrontpageSlideshow from './FrontpageSlideshow'
import Intro from './Intro'
import MovieList from './MovieList'
import NewsItemList from './NewsItemList'
import PersonalityList from './PersonalityList'
import ProductList from './ProductList'
import Product from './Product'
import EmailOptin from './EmailOptin'
import TwoCol from './TwoCol'
import Title from './Title'
import TopMovies from './TopMovies'
import Game from './Game'
import GameList from './GameList'
import Character from './Character'
import CharacterList from './CharacterList'
import Genre_Game from './genre_game'
import genregenre from './Genregenre'
import Platform from './Platform'
import Role from './Role'
import Gender from './Gender'
import Company from './Company'
import PlatformList from './PlatformList'
import CompanyList from './CompanyList'
import Review from './Review'
import minimumage from './minimumage'
import ReviewOptin from './ReviewOptin'
import ReviewList from './ReviewList'
import Cours from './Cours'
import CoursList from './CoursList'
import Chapitre from './Chapitre'
import Picture from './Picture'
import Article from './Article'

const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'featured-posts': FeaturedPosts,
  'page': Page,
  'post': BlogPost,
  'text': Text,
  'selected-posts': PostsList,
  'movie': Movie,
  'personality': Personality,
  'studio': Studio,
  'genre' : Genre,
  'country' : Country,
  'newsitem': NewsItem,
  'frontpageslideshow':FrontpageSlideshow,
  'intro':Intro,
  'movielist':MovieList,
  'newsitemlist':NewsItemList,
  'productlist':ProductList,
  'productcategory':Placeholder,
  'personalitylist':PersonalityList,
  'product':Product,
  'emailoptin':EmailOptin,
  'twocol':TwoCol,
  'title':Title,
  'topmovies':TopMovies,
  'game' :Game,
  'gamelist':GameList,
  'character':Character,
  'characterlist':CharacterList,
  'genre_game':Genre_Game,
  'genregenre': genregenre,
  'platform': Platform,
  'role':Role,
  'gender': Gender,
  'Company':Company,
  'platformlist': PlatformList,
  'companylist':CompanyList,
  'review': Review,
  'minimumage':minimumage,
  "reviewoptin":ReviewOptin,
  "reviewlist": ReviewList,
  "cours": Cours,
  "courslist": CoursList,
  "chapitre": Chapitre,
  "picture": Picture,
  "article": Article,
}


const DynamicComponent = ({ data, locale }) => {
  let componentType='undefined';
  let level = 'undefined';
  if(data&&data.story&&data.story.content){
    componentType = data.story.content.component;
    level='data';
  } else if(data&&data.component){
    componentType = data.component;
    level='content';
  }
  if (componentType !== 'undefined') {
    const Component = Components[componentType]
    return <Component data={data} level={level} locale={locale}  />
  }
  return <Placeholder componentName={componentType}/>
}

export default DynamicComponent
