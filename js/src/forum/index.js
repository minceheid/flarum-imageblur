import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import PostsUserPage from 'flarum/forum/components/PostsUserPage';
import DiscussionsUserPage from 'flarum/forum/components/DiscussionsUserPage';

app.initializers.add('minceheid/imageblur', () => {
  const toExtend = [IndexPage, DiscussionPage, PostsUserPage, DiscussionsUserPage];

  toExtend.forEach((component) => {
    extend(component.prototype, 'view', function (view) {
      if (app.session.user) {
        // user signed in
      } else {
        // not signed in, so do some stuff
        // Create our stylesheet
        var style = document.createElement('style');
        style.innerHTML = '.flarum-img { filter: blur(5px); } .Search-input { display:none; }';
        // Get the first script tag
        var ref = document.querySelector('script');
        // Insert our new styles before the first script tag
        ref.parentNode.insertBefore(style, ref);
      }
      
      // find any images
      const imgs=document.querySelectorAll('div.Post-body img[title="flarum-img"]:not([class*="flarum-img"])')
      imgs.forEach(function(img) {
          img.setAttribute('class','flarum-img');
      })
    });
  });
});
