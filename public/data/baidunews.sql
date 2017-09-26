-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-09-09 06:14:52
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(5, '推荐', '贫困大学生入学调查：一些地方资助识别不精准、资源短缺', 'image/1.JPEG', '2017-09-08 00:00:00', '热点'),
(6, '推荐', '习近平应约同法国总统马克龙通电话', 'image/2.jpg', '2017-09-01 00:00:00', '热点'),
(7, '推荐', '北京9月初污染两次来袭 专家释疑', 'image/3.jpg', '2017-09-02 00:00:00', '热点'),
(8, '推荐', '假冒媒体人抢红包可月入过万，会虫也开始互联网+', 'image/4.JPEG', '2017-09-02 00:00:00', '猜你喜欢'),
(9, '百家', '国家拳击队解散', 'image/5.JPEG', '2017-09-06 00:00:00', '猜你喜欢'),
(10, '本地', '北京电影学院微博 小学生内裤凹凸照片', 'image/6.JPEG', '2017-09-15 00:00:00', '猜你喜欢'),
(11, '百家', '刚文哲任中国政法大学党委副书记、纪委书记', 'image/7.JPEG', '2017-09-15 00:00:00', '猜你喜欢'),
(12, '娱乐', '《蜘蛛侠》归来，咪咕影院邀您来约票', 'image/8.JPEG', '2017-09-14 00:00:00', '蜘蛛侠'),
(13, '社会', '坐高铁回郑，他把戍边纪念品落保定了', 'image/9.JPEG', '2017-09-13 00:00:00', '热点');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
