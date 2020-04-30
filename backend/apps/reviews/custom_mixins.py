class FilterReviewMixin:
    def filter_reviews(self, reviews):
        if "search" in self.request.query_params.keys():
            reviews_including_search = []
            search = self.request.query_params["search"].lower()
            for item in reviews:
                if item.user and (search in item.content.lower() or search in item.user.username.lower()):
                    reviews_including_search.append(item)
            return reviews_including_search
        return reviews.order_by("-date_created")