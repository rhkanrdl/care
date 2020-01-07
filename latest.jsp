<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="wp" uri="http://infomind.com/wp" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<c:forEach items="${latestBoardItems}" var="item">

    <li>
        <a href="${moreLink}?boardId=${latestBoard.boardId}&boardItemId=${item.id}&menuId=${menuId}">

                <p class="news-img">
                    <img src="http://img.youtube.com/vi/${item.temp01}/0.jpg" alt="<wp:util value="${item.title}" type="escape"/>">

                </p>
            <div class="news-title">
                <h5>${item.title}</h5>
                <p><fmt:formatDate value="${item.regDate}" pattern="yyyy.MM.dd"/></p>
            </div>
        </a>
    </li>
</c:forEach>
