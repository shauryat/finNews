import React from 'react'
import { Link } from 'gatsby'

import Image from './Image'
import './PostCard.css'

const PostCard = ({
  featuredImage,
  title,
  excerpt,
  slug,
  categories = [],
  className = '',
  author,
  ...props
}) => (
  <Link to={slug} className={`PostCard ${className}`}>
    {featuredImage && (
      <div className="PostCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
    <div className="PostCard--Content">
      {title && <h1 className="PostCard--Title">{title}
       </h1>}
      
      <div className="PostCard--Category">
        {categories && categories.filter(cat => cat.category !== "Story of The Day").map(cat => cat.category).join(', ')}
      </div>
  
      
    </div>
  </Link>
)

export default PostCard
