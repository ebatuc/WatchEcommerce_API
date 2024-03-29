USE [master]
GO
/****** Object:  Database [EcWatchDb]    Script Date: 14.01.2024 18:17:57 ******/
CREATE DATABASE [EcWatchDb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'EcWatchDb', FILENAME = N'D:\Dprogram files\MS SQL\MSSQL16.MSSQLSERVER\MSSQL\DATA\EcWatchDb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'EcWatchDb_log', FILENAME = N'D:\Dprogram files\MS SQL\MSSQL16.MSSQLSERVER\MSSQL\DATA\EcWatchDb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [EcWatchDb] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [EcWatchDb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [EcWatchDb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [EcWatchDb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [EcWatchDb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [EcWatchDb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [EcWatchDb] SET ARITHABORT OFF 
GO
ALTER DATABASE [EcWatchDb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [EcWatchDb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [EcWatchDb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [EcWatchDb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [EcWatchDb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [EcWatchDb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [EcWatchDb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [EcWatchDb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [EcWatchDb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [EcWatchDb] SET  ENABLE_BROKER 
GO
ALTER DATABASE [EcWatchDb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [EcWatchDb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [EcWatchDb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [EcWatchDb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [EcWatchDb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [EcWatchDb] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [EcWatchDb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [EcWatchDb] SET RECOVERY FULL 
GO
ALTER DATABASE [EcWatchDb] SET  MULTI_USER 
GO
ALTER DATABASE [EcWatchDb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [EcWatchDb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [EcWatchDb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [EcWatchDb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [EcWatchDb] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [EcWatchDb] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'EcWatchDb', N'ON'
GO
ALTER DATABASE [EcWatchDb] SET QUERY_STORE = ON
GO
ALTER DATABASE [EcWatchDb] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [EcWatchDb]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 14.01.2024 18:17:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Blog]    Script Date: 14.01.2024 18:17:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Blog](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](max) NULL,
	[ShortDescription] [nvarchar](max) NULL,
	[LongDescription] [nvarchar](max) NULL,
	[Slug] [nvarchar](max) NULL,
	[Image] [nvarchar](max) NULL,
	[PostBy] [nvarchar](max) NULL,
	[PostDate] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Blog] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Brands]    Script Date: 14.01.2024 18:17:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Brands](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](max) NULL,
	[Slug] [nvarchar](max) NULL,
 CONSTRAINT [PK_Brands] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderedProducts]    Script Date: 14.01.2024 18:17:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderedProducts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[OrderId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
	[Quantity] [int] NOT NULL,
 CONSTRAINT [PK_OrderedProducts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 14.01.2024 18:17:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[Id] [int] NOT NULL,
	[OrderDate] [datetime2](7) NOT NULL,
	[PersonalInfoId] [int] NOT NULL,
	[TotalPrice] [float] NOT NULL,
 CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersonalData]    Script Date: 14.01.2024 18:17:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonalData](
	[Id] [int] NOT NULL,
	[FirstName] [nvarchar](max) NULL,
	[LastName] [nvarchar](max) NULL,
	[Country] [nvarchar](max) NULL,
	[City] [nvarchar](max) NULL,
	[District] [nvarchar](max) NULL,
	[Zip] [nvarchar](max) NULL,
	[Phone] [nvarchar](max) NULL,
	[Email] [nvarchar](max) NULL,
 CONSTRAINT [PK_PersonalData] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 14.01.2024 18:17:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[Price] [decimal](18, 2) NULL,
	[Image1] [nvarchar](max) NULL,
	[Image2] [nvarchar](max) NULL,
	[Slug] [nvarchar](max) NULL,
	[BrandId] [int] NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 14.01.2024 18:17:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
	[RegisteredDate] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WishList]    Script Date: 14.01.2024 18:17:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WishList](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ProductId] [int] NOT NULL,
	[ProductName] [nvarchar](max) NOT NULL,
	[IsChecked] [bit] NOT NULL,
	[IsDelete] [bit] NOT NULL,
 CONSTRAINT [PK_WishList] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240109164201_2341', N'7.0.14')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240109170003_2432d', N'7.0.14')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240109170702_21ewd', N'7.0.14')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240109171442_asd22', N'7.0.14')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240109194638_2431k', N'7.0.14')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240109210104_232ds', N'7.0.14')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240110193253_dsedea', N'7.0.14')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240112135625_soeww2', N'7.0.14')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240112135752_213eqw', N'7.0.14')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240112140905_12edsa', N'7.0.14')
GO
SET IDENTITY_INSERT [dbo].[Blog] ON 

INSERT [dbo].[Blog] ([Id], [Title], [ShortDescription], [LongDescription], [Slug], [Image], [PostBy], [PostDate]) VALUES (1, N'Choosing the Perfect Timepiece', N'Explore the art of choosing the perfect watch for every occasion.', N'Dive into the world of horology and discover the factors to consider when choosing a timepiece. Whether it''s for a formal event or casual wear, find the perfect watch for your style.', N'choosing-the-perfect-timepiece', N'assets/img/blog/blog1.jpg', N'admin', CAST(N'2023-01-01T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[Blog] ([Id], [Title], [ShortDescription], [LongDescription], [Slug], [Image], [PostBy], [PostDate]) VALUES (2, N'Maintenance Tips for Luxury Watches', N'Learn essential tips to keep your luxury watches in pristine condition.', N'Owning a luxury watch comes with responsibilities. Discover maintenance tips and tricks to ensure your timepiece retains its beauty and functionality for years to come.', N'maintenance-tips-for-luxury-watches', N'assets/img/blog/blog5.jpg', N'admin', CAST(N'2023-02-15T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[Blog] ([Id], [Title], [ShortDescription], [LongDescription], [Slug], [Image], [PostBy], [PostDate]) VALUES (3, N'History of Iconic Watch Brands', N'Explore the rich history and heritage of iconic watch brands.', N'Take a journey through time and learn about the fascinating history behind some of the most iconic watch brands in the world. From innovations to timeless designs, discover the stories behind the watches.', N'history-of-iconic-watch-brands', N'assets/img/blog/blog3.jpg', N'admin', CAST(N'2023-05-10T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[Blog] ([Id], [Title], [ShortDescription], [LongDescription], [Slug], [Image], [PostBy], [PostDate]) VALUES (4, N'Trends in Watch Design', N'Stay updated on the latest trends in watch design and fashion.', N'Fashion and watch design evolve over time. Stay ahead of the curve by exploring the current trends in watch design. From minimalist dials to bold colors, find out what''s hot in the world of wristwatches.', N'trends-in-watch-design', N'assets/img/blog/blog7.jpg', N'admin', CAST(N'2023-08-22T00:00:00.0000000' AS DateTime2))
SET IDENTITY_INSERT [dbo].[Blog] OFF
GO
SET IDENTITY_INSERT [dbo].[Brands] ON 

INSERT [dbo].[Brands] ([Id], [Title], [Slug]) VALUES (1, N'Cartier', N'cartier')
INSERT [dbo].[Brands] ([Id], [Title], [Slug]) VALUES (2, N'Rolex', N'rolex')
INSERT [dbo].[Brands] ([Id], [Title], [Slug]) VALUES (3, N'Omega', N'omega')
INSERT [dbo].[Brands] ([Id], [Title], [Slug]) VALUES (4, N'Tag Heuer', N'tag-heuer')
INSERT [dbo].[Brands] ([Id], [Title], [Slug]) VALUES (5, N'Seiko', N'seiko')
SET IDENTITY_INSERT [dbo].[Brands] OFF
GO
SET IDENTITY_INSERT [dbo].[OrderedProducts] ON 

INSERT [dbo].[OrderedProducts] ([Id], [OrderId], [ProductId], [Quantity]) VALUES (79, 2544, 12, 2)
INSERT [dbo].[OrderedProducts] ([Id], [OrderId], [ProductId], [Quantity]) VALUES (80, 2544, 13, 1)
INSERT [dbo].[OrderedProducts] ([Id], [OrderId], [ProductId], [Quantity]) VALUES (81, 113934, 12, 1)
INSERT [dbo].[OrderedProducts] ([Id], [OrderId], [ProductId], [Quantity]) VALUES (82, 113934, 11, 2)
SET IDENTITY_INSERT [dbo].[OrderedProducts] OFF
GO
INSERT [dbo].[Orders] ([Id], [OrderDate], [PersonalInfoId], [TotalPrice]) VALUES (2544, CAST(N'2024-01-10T00:15:23.1768368' AS DateTime2), 96138, 23099.967)
INSERT [dbo].[Orders] ([Id], [OrderDate], [PersonalInfoId], [TotalPrice]) VALUES (113934, CAST(N'2024-01-12T16:53:33.4420922' AS DateTime2), 19649, 10119.967)
GO
INSERT [dbo].[PersonalData] ([Id], [FirstName], [LastName], [Country], [City], [District], [Zip], [Phone], [Email]) VALUES (19649, N'Erhan', N'Kaya', N'TR', N'Istanbul', N'Avcılar', N'34121', N'5348569821', N'erhan@legacy.com')
INSERT [dbo].[PersonalData] ([Id], [FirstName], [LastName], [Country], [City], [District], [Zip], [Phone], [Email]) VALUES (96138, N'Batuhan', N'çelik', N'TR', N'Istanbul', N'Pendik', N'34121', N'5479865246', N'batu@legacy.com')
GO
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([Id], [Title], [Description], [Price], [Image1], [Image2], [Slug], [BrandId]) VALUES (11, N'Cartier Tank Solo', N'Elegant and timeless watch from Cartier''s Tank collection.', CAST(599.99 AS Decimal(18, 2)), N'assets/img/products/1-450x450.jpg', N'assets/img/products/1-1-450x450.jpg', N'cartier-tank-solo', 1)
INSERT [dbo].[Products] ([Id], [Title], [Description], [Price], [Image1], [Image2], [Slug], [BrandId]) VALUES (12, N'Rolex Submariner', N'Classic diving watch known for its durability and precision.', CAST(7999.99 AS Decimal(18, 2)), N'assets/img/products/2-450x450.jpg', N'assets/img/products/6-6-450x450.jpg', N'rolex-submariner', 2)
INSERT [dbo].[Products] ([Id], [Title], [Description], [Price], [Image1], [Image2], [Slug], [BrandId]) VALUES (13, N'Omega Speedmaster', N'Iconic chronograph watch, often associated with space exploration.', CAST(4999.99 AS Decimal(18, 2)), N'assets/img/products/3-450x450.jpg', N'assets/img/products/3-3-450x450.jpg', N'omega-speedmaster', 3)
INSERT [dbo].[Products] ([Id], [Title], [Description], [Price], [Image1], [Image2], [Slug], [BrandId]) VALUES (14, N'Tag Heuer Carrera', N'Sporty and stylish chronograph watch from Tag Heuer''s Carrera collection.', CAST(3499.99 AS Decimal(18, 2)), N'assets/img/products/4-450x450.jpg', N'assets/img/products/4-4-450x450.jpg', N'tag-heuer-carrera', 4)
INSERT [dbo].[Products] ([Id], [Title], [Description], [Price], [Image1], [Image2], [Slug], [BrandId]) VALUES (15, N'Seiko Presage', N'Japanese automatic watch with traditional craftsmanship and modern design.', CAST(899.99 AS Decimal(18, 2)), N'assets/img/products/5-450x450.jpg', N'assets/img/products/5-5-450x450.jpg', N'seiko-presage', 5)
SET IDENTITY_INSERT [dbo].[Products] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [Email], [Password], [RegisteredDate]) VALUES (7, N'batu@legacy.com', N'123456', CAST(N'2024-01-10T19:55:29.0477904' AS DateTime2))
INSERT [dbo].[Users] ([Id], [Email], [Password], [RegisteredDate]) VALUES (9, N'admin@legacy.com', N'admin', CAST(N'2024-01-11T15:04:50.6992357' AS DateTime2))
INSERT [dbo].[Users] ([Id], [Email], [Password], [RegisteredDate]) VALUES (10, N'trainwork@legacy.com', N'123456', CAST(N'2024-01-12T19:28:53.3686881' AS DateTime2))
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
SET IDENTITY_INSERT [dbo].[WishList] ON 

INSERT [dbo].[WishList] ([Id], [ProductId], [ProductName], [IsChecked], [IsDelete]) VALUES (17, 15, N'Seiko Presage', 0, 1)
INSERT [dbo].[WishList] ([Id], [ProductId], [ProductName], [IsChecked], [IsDelete]) VALUES (18, 14, N'Tag Heuer Carrera', 1, 0)
INSERT [dbo].[WishList] ([Id], [ProductId], [ProductName], [IsChecked], [IsDelete]) VALUES (20, 12, N'Rolex Submariner', 1, 0)
INSERT [dbo].[WishList] ([Id], [ProductId], [ProductName], [IsChecked], [IsDelete]) VALUES (24, 13, N'Omega Speedmaster', 0, 0)
INSERT [dbo].[WishList] ([Id], [ProductId], [ProductName], [IsChecked], [IsDelete]) VALUES (25, 12, N'Rolex Submariner', 0, 1)
SET IDENTITY_INSERT [dbo].[WishList] OFF
GO
/****** Object:  Index [IX_Products_BrandId]    Script Date: 14.01.2024 18:17:58 ******/
CREATE NONCLUSTERED INDEX [IX_Products_BrandId] ON [dbo].[Products]
(
	[BrandId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [OrderDate]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT ((0.0000000000000000e+000)) FOR [TotalPrice]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Brands_BrandId] FOREIGN KEY([BrandId])
REFERENCES [dbo].[Brands] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Brands_BrandId]
GO
USE [master]
GO
ALTER DATABASE [EcWatchDb] SET  READ_WRITE 
GO
