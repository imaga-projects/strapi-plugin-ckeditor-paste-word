import {
  Autoformat,
  BlockQuote,
  Bold,
  Code,
  CodeBlock,
  Essentials,
  Heading,
  HorizontalLine,
  Image,
  ImageInsert,
  ImageToolbar,
  ImageUpload,
  Italic,
  List,
  Link,
  Paragraph,
  SourceEditing,
  SpecialCharacters,
  SpecialCharactersEssentials,
  Strikethrough,
  Table,
  TableToolbar,
  WordCount,
  Markdown,
  TextTransformation,
  TodoList,
} from 'ckeditor5';

import type { Preset, EditorConfig } from './types';
import { StrapiMediaLib, StrapiUploadAdapter } from '../plugins';

const editorConfig: EditorConfig = {
  licenseKey: 'GPL',
  plugins: [
    Autoformat,
    BlockQuote,
    Bold,
    Code,
    CodeBlock,
    Essentials,
    Heading,
    HorizontalLine,
    Image,
    ImageToolbar,
    ImageUpload,
    ImageInsert,
    Italic,
    List,
    Link,
    Markdown,
    Paragraph,
    SourceEditing,
    SpecialCharacters,
    SpecialCharactersEssentials,
    Strikethrough,
    Table,
    TableToolbar,
    TextTransformation,
    TodoList,
    WordCount,

    StrapiMediaLib,
    StrapiUploadAdapter,
  ],
  toolbar: [
    'sourceEditing',
    '|',
    'heading',
    '|',
    'bold',
    'italic',
    'fontColor',
    'strikethrough',
    'code',
    'bulletedList',
    'numberedList',
    'todoList',
    'link',
    'insertImage',
    'strapiMediaLib',
    'blockQuote',
    'insertTable',
    'codeBlock',
    'specialCharacters',
    'horizontalLine',
    'undo',
    'redo',
  ],
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      {
        model: 'heading1',
        view: 'h1',
        title: 'Heading 1',
        class: 'ck-heading_heading1',
      },
      {
        model: 'heading2',
        view: 'h2',
        title: 'Heading 2',
        class: 'ck-heading_heading2',
      },
      {
        model: 'heading3',
        view: 'h3',
        title: 'Heading 3',
        class: 'ck-heading_heading3',
      },
      {
        model: 'heading4',
        view: 'h4',
        title: 'Heading 4',
        class: 'ck-heading_heading4',
      },
      {
        model: 'heading5',
        view: 'h5',
        title: 'Heading 5',
        class: 'ck-heading_heading5',
      },
      {
        model: 'heading6',
        view: 'h6',
        title: 'Heading 6',
        class: 'ck-heading_heading6',
      },
    ],
  },
  image: {
    toolbar: ['imageTextAlternative'],
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
  },
  ui: {
    poweredBy: {
      position: 'inside',
      side: 'left',
      label: '',
      verticalOffset: 0,
      horizontalOffset: 0,
    },
  },
};

export const defaultMarkdownPreset: Preset = {
  name: 'defaultMarkdown',
  description: 'Default Markdown editor',
  editorConfig,
};
