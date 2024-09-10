import { post } from "./apiUtils";
import { END_POINT } from "@constants/api";
import { BaseResponse } from "@type/Api";
import { Comment } from "@type/Comment";

type CommentResponse = BaseResponse<Comment>;

export const postShortWordToNextMonth = async (
  comment: Comment
): Promise<CommentResponse> => {
  try {
    const res = await post<CommentResponse>(
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
): Promise<CommentResponse> => {
  try {
    const res = await post<CommentResponse>(
      END_POINT.USER.POST_MONTH_COMMENT_UPDATE,
      comment
    );
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
