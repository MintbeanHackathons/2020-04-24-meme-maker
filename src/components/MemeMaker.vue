<template lang="pug">
  .container
    .row(v-if="!selectedImage")
      .col
        h5 Select an Image
    .row.bg-secondary.p-2.rounded(v-else)
      .col-12
        .row
          .col
            div(contenteditable="false")
              svg(height="400" width="auto")
                image(:href="selectedImage.url" height="400")            
                text(x="1em" :y="index+1*2 + 'em'"
                  v-for="(string,index) in strings"
                  :fill="strings[index].color"
                  font-size="1em") {{string.text}}
          .col
            .row
              b-form-group(
              id="input-group-2"
              label="Text:"
              label-for="input-texts")
            .row(v-for="(string,index) in strings")
              .col-8
                b-form-input(
                  id="input-2"
                  v-model="strings[index].text"
                  required
                  placeholder="Enter text")
              .col-4
                b-button(variant="info" @click="toggleShade(index)") Toggle Shade
            .row.m-1
              .col
                b-button(variant="success" @click="addString") Add Text
    .row
      .col-3.p-1(v-for="(image,index) in images" :key="image.id" @click="selectImage(index)")
        MemeImages(:image='image')
        
</template>

<script>
import MemeImages from "./MemeImages.vue";
import axios from "axios";
export default {
  components: {
    MemeImages
  },
  data() {
    return {
      images: [],
      selectedImage: null,
      strings: [{ text: "Hello", color: "white" }]
    };
  },
  mounted() {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then(response => (this.images = response.data.data.memes))
      .catch(function(error) {
        this.images = [];
        console.log(error);
      });
  },
  methods: {
    selectImage(index) {
      this.selectedImage = this.images[index];
    },
    addString() {
      this.strings.push({ text: "", color: "white" });
    },
    toggleShade(index) {
      this.strings[index].color === "white"
        ? (this.strings[index].color = "back")
        : (this.strings[index].color = "white");
    },
  }
};
</script>

<style scoped>
img {
  max-height: 400px;
  max-width: 400px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
