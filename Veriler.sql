INSERT INTO Brands (Title, Slug)
VALUES 
  ('Cartier', 'cartier'),
  ('Rolex', 'rolex'),
  ('Omega', 'omega'),
  ('Tag Heuer', 'tag-heuer'),
  ('Seiko', 'seiko');

  INSERT INTO Products (Title, Description, Price, Image1, Image2, Slug, BrandId)
VALUES 
  ('Cartier Tank Solo', 'Elegant and timeless watch from Cartier''s Tank collection.', 599.99, 'assets/img/products/1-450x450.jpg', 'assets/img/products/1-1-450x450.jpg', 'cartier-tank-solo', 1),
  ('Rolex Submariner', 'Classic diving watch known for its durability and precision.', 7999.99, 'assets/img/products/2-450x450.jpg', 'assets/img/products/6-6-450x450.jpg', 'rolex-submariner', 2),
  ('Omega Speedmaster', 'Iconic chronograph watch, often associated with space exploration.', 4999.99, 'assets/img/products/3-450x450.jpg', 'assets/img/products/3-3-450x450.jpg', 'omega-speedmaster', 3),
  ('Tag Heuer Carrera', 'Sporty and stylish chronograph watch from Tag Heuer''s Carrera collection.', 3499.99, 'assets/img/products/4-450x450.jpg', 'assets/img/products/4-4-450x450.jpg', 'tag-heuer-carrera', 4),
  ('Seiko Presage', 'Japanese automatic watch with traditional craftsmanship and modern design.', 899.99, 'assets/img/products/5-450x450.jpg', 'assets/img/products/5-5-450x450.jpg', 'seiko-presage', 5);


  INSERT INTO Blog (Title, ShortDescription, LongDescription, Slug, Image, PostBy, PostDate)
VALUES ('Choosing the Perfect Timepiece', 'Explore the art of choosing the perfect watch for every occasion.', 'Dive into the world of horology and discover the factors to consider when choosing a timepiece. Whether it''s for a formal event or casual wear, find the perfect watch for your style.', 'choosing-the-perfect-timepiece', 'assets/img/blog/blog1.jpg', 'admin', '2023-01-01');

INSERT INTO Blog (Title, ShortDescription, LongDescription, Slug, Image, PostBy, PostDate)
VALUES ('Maintenance Tips for Luxury Watches', 'Learn essential tips to keep your luxury watches in pristine condition.', 'Owning a luxury watch comes with responsibilities. Discover maintenance tips and tricks to ensure your timepiece retains its beauty and functionality for years to come.', 'maintenance-tips-for-luxury-watches', 'assets/img/blog/blog5.jpg', 'admin', '2023-02-15');

INSERT INTO Blog (Title, ShortDescription, LongDescription, Slug, Image, PostBy, PostDate)
VALUES ('History of Iconic Watch Brands', 'Explore the rich history and heritage of iconic watch brands.', 'Take a journey through time and learn about the fascinating history behind some of the most iconic watch brands in the world. From innovations to timeless designs, discover the stories behind the watches.', 'history-of-iconic-watch-brands', 'assets/img/blog/blog3.jpg', 'admin', '2023-05-10');

INSERT INTO Blog (Title, ShortDescription, LongDescription, Slug, Image, PostBy, PostDate)
VALUES ('Trends in Watch Design', 'Stay updated on the latest trends in watch design and fashion.', 'Fashion and watch design evolve over time. Stay ahead of the curve by exploring the current trends in watch design. From minimalist dials to bold colors, find out what''s hot in the world of wristwatches.', 'trends-in-watch-design', 'assets/img/blog/blog7.jpg', 'admin', '2023-08-22');
