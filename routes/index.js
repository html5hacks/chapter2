
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'OReilly HTML5 Hacks Chapter 2 - Hacking with Style' })
};

exports.fontface = function(req, res){
  res.render('fontface', { title: '@fontface' })
};

exports.transparency = function(req, res){
  res.render('transparency', { title: 'Transparency without Opacity, Using Alpha Transparency' })
};

exports.borders = function(req, res){
  res.render('borders', { title: 'Hack Your Borders' })
};

exports.multipleBGs = function(req, res){
  res.render('multipleBGs', { title: 'Background, Background, Background' })
};

exports.transforms = function(req, res){
  res.render('transforms', { title: 'Make iOS style Flips with CSS3' })
};