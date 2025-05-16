import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa6';

const News = ({ news }) => {

          const { title, thumbnail_url, details, total_view } = news;

          return (
                    <div className="card-body bg-base-200 shadow">
                              <h1 className="text-2xl desc-font">{title}</h1>
                              <img 
                                        src={thumbnail_url} 
                                        alt="news image" 
                                        className="rounded-xl"
                              />
                              <p>{details}</p>
                              <div className="card-actions justify-between items-center">
                                        <span className="text-xl flex flex-row items-center gap-2"><FaStar /> Rating</span>
                                        <span className="text-xl flex flex-row items-center gap-2"><FaEye /> {total_view}</span>
                              </div>
                    </div>
          );
};

export default News;

/*

{
    "id": "defabc7p123450123defabc7p12345",
    "category_id": 8,
    "title": "Opposition Parties Stage Protest Rally Demanding Electoral Reforms",
    "rating": {
        "number": 3,
        "badge": "trending"
    },
    "total_view": 8234,
    "author": {
        "name": "Ruhul Kabir Rizvi",
        "published_date": "2025-04-22T19:45:00.000Z",
        "img": "https://randomuser.me/api/portraits/men/19.jpg"
    },
    "thumbnail_url": "https://www.aljazeera.com/wp-content/uploads/2022/12/AP22344433481829.jpg?resize=1920%2C1440",
    "image_url": "https://www.aljazeera.com/wp-content/uploads/2022/12/AP22344433481829.jpg?resize=1920%2C1440",
    "details": "A coalition of opposition political parties in Bangladesh has organized a large-scale protest rally in the capital city, demanding comprehensive reforms to the electoral system. The parties are calling for greater transparency and accountability in the election process to ensure free and fair polls in the future. The rally drew a significant number of supporters, and leaders addressed the crowd, outlining their demands for specific changes to the electoral laws and the role of the Election Commission. Security measures were heightened in the city to maintain order during the demonstration. The government has acknowledged the opposition's concerns and indicated a willingness to engage in discussions, although the extent and nature of potential reforms remain to be seen.",
    "tags": [
        "politics",
        "protest",
        "electoral reforms",
        "opposition",
        "Bangladesh"
    ],
    "others": {
        "is_today_pick": false,
        "is_trending": true
    },
    "production": true
}



*/