const calculateRectangleArea = function (length, width) {
  let rectangle = length * width;
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    return rectangle;
  }
}

const calculateTriangleArea = function (base, height) {
  let triangle = base * height / 2;
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    return triangle;
  }
}

const calculateCircleArea = function (radius) {
  let circle = Math.PI * (radius * radius);
  if (radius < 0) {
    return undefined;
  } else {
    return circle;
  }
}

