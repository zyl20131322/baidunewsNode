var express = require('express');
var router = express.Router();
var connection=require('./dbconnect.js');
/* 后台路由页面 */
//获取所有新闻列表
router.get('/getnews', function(req, res, next) {
	connection.query('SELECT * FROM `news` order by id desc',function(err,rows){
		res.json(rows);
	});
});
//确认更新
router.post('/update', function(req, res, next) {
	var newsid=req.body.newsid,
		newstype=req.body.newstype,
		newstitle=req.body.newstitle,
		newstime=req.body.newstime,
		newsimg=req.body.newsimg,
		newssrc=req.body.newssrc;
	connection.query('UPDATE `news` SET `newstitle`=?,`newssrc`=?,`newsimg`=?,`newstype`=?,`newstime`=? WHERE `id`=?',
		[newstitle,newssrc,newsimg,newstype,newstime,newsid],function(err,rows){
		if(!err){
				rows={status: 1,
					msg:'success'};
				res.json(rows);
			}
	});
});
//模态框取值
router.get('/curnews', function(req, res, next) {
	var newsid=req.query.newsid;
	connection.query('SELECT * FROM `news` WHERE `id`=?',[newsid],function(err,rows){
		res.json(rows);
	});
});
//删除
router.post('/delete', function(req, res, next) {
	var newsid=req.body.newsid;
	connection.query('DELETE FROM `news` WHERE `id`=?',[newsid],function(err,rows){
		if(!err){
				rows={status: 1,
					msg:'success'};
				res.json(rows);
			}
	});
});
//插入
router.post('/insert', function(req, res, next) {
	var newstype=req.body.newstype,
		newstitle=req.body.newstitle,
		newsimg=req.body.newsimg,
		newstime=req.body.newstime,
		newssrc=req.body.newssrc;
	connection.query('INSERT INTO `news` (`newstitle`,`newstype`,`newssrc`,`newsimg`,`newstime`) VALUES(?,?,?,?,?)',
		[newstitle,newstype,newssrc,newsimg,newstime],function(err,rows){
			if(!err){
				rows={status: 1,
					msg:'success'};
				res.json(rows);
			}
		
	});
});
module.exports = router;
