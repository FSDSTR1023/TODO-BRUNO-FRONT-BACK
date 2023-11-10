export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    console.log(error.errors, 'error.errors');
    return res.status(400).json({
      error: error.errors?.map((error) => error.message),
    });
  }
};

export const validateSchemaTask = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    console.log(error, 'error');
    return res.status(400).json({
      error: error.errors?.map((error) => error.message),
    });
  }
};
