import axios from "axios";
import cheerio from "cheerio";   

export default async function Test(req, res)
{
    const plain = await axios.get('https://komikindo.id/daftar-komik/page/2')
    const response = await plain.data;
    const $ = cheerio.load(response);
    const arr = []
    const file = $('.animepost')
    .children()
    .map(function()
    {
      const obj ={name:"", poster:""}
      obj.name =  $(this).find('h4').text();
      obj.poster = $(this).find('img').attr('src');
      arr.push(obj);
    })
    res.send(arr)
}