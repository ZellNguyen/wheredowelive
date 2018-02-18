import React, { Component } from 'react';
import { View } from 'react-native';
import FeedCell from './feed.cell.component';
import { StyleSheet } from 'react-native';
import { Content } from 'native-base';
import FeedHeader from './feed.header.component';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <Content style={style.view}>
        <FeedHeader/>
        <FeedCell profilePic="http://c8.alamy.com/comp/CMNG68/portrait-of-an-aboriginal-stockman-cooktown-queensland-australia-CMNG68.jpg"
          name="Skwachàys Lodge" 
          date="Feb.14.2018" 
          content="Skwachàys Lodge Aboriginal Hotel & Gallery is looking for Artists in Residence. If you’re a practicing Indigenous artist, a self-identified First Nations, Metis, or Inuit, and willing to volunteer 8 hours a month, Skwachàys Lodge wants to hear… Full text
 Many barbeque myths are so well known and so wide spread that they are more frequently passed on as truth than they are as the myths that they truly are.

For example, many people love to try to get perfect grill lines on their barbequed foods. Either straight lines, or the more fancy criss-crossed ones are often accepted as a sure sign of the expert barbeque chef. What this involves is flipping your meat, so that the lines are on the both sides. However, many people don’t ever get to achieve this art form because they have fallen victim to one of the main barbeque myths. They believe that flipping or poking your grilled food makes it tough – this is a myth. In fact, flipping your meat not only creates great grill lines, but it also makes certain that you cook more evenly.  While you read up on the swath of information available for providing tips and tricks for the best results on your barbeque, make sure that your source is reliable. While some of this information is very helpful, much of it can be exaggerated or based on what the author “thinks” rather than what is actually known.

The belief that poking or flipping your food will let all of the juices out and make it tough would only work if your food was shaped exactly like a balloon – which it isn’t. Meat is made up of hundreds of small cells, each filled with its own moisture and juices. Should you poke your meat with a fork while it’s on the grill, you may pop one or two cells, but it won’t let all of the juices out…only that of the cells you’ve punctured. Certainly, if you repeatedly stab and puncture your meat, many of the cells will be broken, and you’ll lose a great deal of your juices, but other than in a horror movie, there really isn’t any reason to treat your meat that way.

Similarly, flipping your meat doesn’t let a great deal of the juices out either. After all, flipping doesn’t puncture any of the cells, so as long as you don’t flip it and smack it hard, then you won’t lose much by the way of juices at all. Be gentle…it’s already dead!

The problem with flipping your meat on the grill lies when cooks use their spatulas and other tools to squish the meat after it has been flipped, often trying to squeeze out the grease. By flattening the cells in the meat, much of the moisture and juices are pushed out, leaving the meat dry.

So flip those burgers and poke that steak! Get those grill lines just the way you want them. Your food will always be good and juicy, just like the pros do it."/>
        <FeedCell 
          profilePic="http://www.weekendnotes.com/images/wwwtandanyacom.jpg"
          name="Quinn" 
          date="Feb.10.2018" 
          content="I found these really cool pictures from my mom’s collection of old family photos! Check em out.
ften accepted as a sure sign of the expert barbeque chef. What this involves is flipping your meat, so that the lines are on the both sides. However, many people don’t ever get to achieve this art form because they have fallen victim to one of the main barbeque myths. They believe that flipping or poking your grilled food makes it tough – this is a myth. In fact, flipping your meat not only creates great grill lines, but it also makes certain that you cook more evenly.  While you read up on the swath of information available for providing tips and tricks for the best results on your barbeque, make sure that your source is reliable. While some of this information is very helpful, much of it can be exaggerated or based on what the author “thinks” rather than what is actually known.

The belief that poking or flipping your food will let all of the juices out and make it tough would only work if your food was shaped exactly like a balloon – which it isn’t. Meat is made up of hundreds of small cells, each filled with its own moisture and juices. Should you poke your meat with a fork while it’s on the grill, you may pop one or two cells, but it won’t let all of the juices out…only that of the cells you’ve punctured. Certainly, if you repeatedly stab and puncture your meat, many of the cells will be broken, and you’ll lose a great deal of your juices, but other than in a horror movie, there really isn’t any reason to treat your meat that way.

Similarly, flipping your meat doesn’t let a great deal of the juices out either. After all, flipping doesn’t puncture any of the cells, so as long as you don’t flip it and smack it hard, then you won’t lose much by the way of juices at all. Be gentle…it’s already dead!

The problem with flipping your meat on the grill lies when cooks use their spatulas and other tools to squish the meat after it has been flipped, often trying to squeeze out the grease. By flattening the cells in the meat, much of the moisture and juices are pushed out, leaving the meat dry.

So flip those burgers and poke that steak! Get those grill lines just the way you want them. Your food will always be good and juicy, just like the pros do it."/>
      </Content>
    );
  }
}

const style = StyleSheet.create({
  view: {
    backgroundColor: '#AAAAAA'
  }
})

export default Feed;