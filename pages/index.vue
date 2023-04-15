<template>
  <div>
    <app-header />

    <section
      class="box-comment w-11/12 mx-auto flex flex-col gap-y-5 p-5 mt-10"
    >
      <search-bar :keywords="this.keywords" @search="handleKeywords" />
      <comment :comments="this.comments" />
      <div v-if="find" class="flex flex-col gap-y-5">
        <div v-if="loading" class="loading-spinner"></div>
        <show-more-btn
          :loading="this.loading"
          :keywords="this.keywords"
          :hasMore="this.hasMore"
          :showMore="this.showMore"
        />
      </div>
      <div v-else>
        <h1 class="text-center text-white text-xl">Comments Not Found</h1>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {
    SearchBar: () => import("~/components/SearchBar"),
    Comment: () => import("~/components/Comment"),
    AppHeader: () => import("~/components/Header"),
    ShowMoreBtn: () => import("~/components/Button"),
  },

  data() {
    return {
      comments: [],
      start: 0,
      limit: 10,
      loading: true,
      keywords: "",
      hasMore: true,
      find: true,
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    //using to listen onchange event from search bar component
    handleKeywords(data) {
      this.keywords = data;
    },

    //using to fetch data
    loadData() {
      this.loading = true; //to set a status loading for show a loading animation
      axios
        .get(
          "http://localhost:8000/api/comments/" + this.start + "/" + this.limit
        )
        .then((response) => {
          if (!this.keywords) {
            this.comments = [...this.comments, ...response.data.comments];
          } else {
            //when the search keywords is cleared
            this.comments = response.data.comments;
          }
          this.start += this.limit;
          this.hasMore = response.data.hasMore; //to get a status or state of any data
          this.loading = false; //to set a status loading for hide a loading animation
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //using for search a username or comment
    search() {
      axios
        .get("http://localhost:8000/api/comments/search", {
          params: {
            keywords: this.keywords,
          },
        })
        .then((response) => {
          this.comments = response.data.comments;
          if (this.comments.length < 1) {
            this.find = false;
          }
          this.hasMore = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //to fetch next data
    showMore() {
      this.loadData();
    },
  },

  watch: {
    keywords() {
      this.find = true;
      if (this.keywords !== "") {
        this.comments = [];
        this.hasMore = false;
        this.search();
      } else {
        if (!this.hasMore) {
          this.comments = [];
          this.start = 0;
          this.hasMore = true;
          this.loadData();
        }
      }
    },
  },
};
</script>
