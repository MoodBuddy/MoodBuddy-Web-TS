import { post } from "./apiUtils";
import { END_POINT } from "@constants/api";
import { Comment } from "@type/Comment";

export const postShortWordToNextMonth = async (
  comment: Comment
): Promise<Comment> => {
  try {
    const res = await post<Comment>(
      END_POINT.USER.POST_MONTH_COMMENT,
      comment
    );
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const updateShortWordToNextMonth = async (
  comment: Comment
): Promise<Comment> => {
  try {
    const res = await post<Comment>(
      END_POINT.USER.POST_MONTH_COMMENT_UPDATE,
      comment
    );
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
