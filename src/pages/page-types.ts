import { ContentData } from '../providers/contentProvider';
import { ContentItem } from '../models/content-item';
import { InnerContent } from '../components/inner-content/inner-content';
import { CharacterPhraseImg } from "../components/character-phrase-img/character-phrase-img";

export class BaseContentPage {
  content: ContentData;
  selectedItem: ContentItem;
  _pageContent: string;
  pageModel: string;
  innerContent: InnerContent;
  characterPhraseImg: CharacterPhraseImg;

  ngOnInit() {
    const contentParams = [
      this.selectedItem.menuItem.project,
      this.selectedItem.menuItem.session,
      this.selectedItem.urlName
    ];
    Promise.all([
      this.content.loadContent.apply(this.content, contentParams)
        .catch(e => {
          console.log(e)
        }),
      this.content.loadModel.apply(this.content, contentParams)
        .catch(e => {
          this.innerContent.recompileTemplate(this._pageContent, this.pageModel);
        })
    ])
      .then(([pageData, modelData]) => {
        this._pageContent = pageData['_body'];
        this.pageModel = modelData['_body'] ? JSON.parse(modelData['_body']) : null;
        this.characterPhraseImg.draw(this.pageModel);
        this.innerContent.recompileTemplate(this._pageContent, this.pageModel);
      });
  }
}