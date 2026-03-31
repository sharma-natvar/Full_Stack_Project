const { listService } = require("../services");

const listPost = async (req, res) => {
  try {
    const body = req.body;
    console.log(body , '0');
    if (!body) {
      throw new Error("data not get");
    }
    const resBody = await listService.createList(body);
    console.log(resBody ,'1');
    
    if (!resBody) {
      throw new Error("data not created");
    }
    
    const resUser = await listService.findUser(body.userID);
    console.log(resUser ,'2');

    if (!resUser) {
      throw new Error(" user not found");
    }

    resUser.listId.push(resBody._id);
    resUser.save();

    res.status(201).json({
      message: "created scussesfully",
      data: resBody,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error Found",
      error: err.message,
    });
  }
};



const listGet = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      throw new Error("data not get");
    }
    const resBody = await listService.getList(userId);
    // console.log(resBody ,'resBody');
    if (!resBody) {
      throw new Error("user not found");
    }
    if( resBody.length !== 0){
      res.status(201).json({
        message: "get scussesfully",
        data: resBody,
      });
    }else{
      throw new Error('No Task')
    }
  } catch (err) {
    res.status(400).json({
      message: "Error Found",
      error: err.message,
    });
  }
};

const listUpdate = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    console.log(body, id, "update 0");
    if (!body || !id) {
      throw new Error("data not get");
    }
    const resId = await listService.checkId(id);
    console.log(resId, "update 1");
    if (!resId) {
      throw new Error("list not Found");
    }

    const resBody = await listService.updateList(id, body);
    console.log(resBody, "update 2");

    if (!resBody) {
      throw new Error("list not update");
    }
    res.status(201).json({
      message: "Update scussesfully",
      data: resBody,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error Found",
      error: err.message,
    });
  }
};

const listDelete = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("list Delete");
    }

    const resID = await listService.checkId(id);
    if (!resID) {
      throw new Error("list not found");
    }
    const resBody = await listService.deleteList(id);

    if (!resBody) {
      throw new Error("list not Delete");
    }

    const { userID } = resBody;
    console.log(userID, "userID");

    const resUser = await listService.UserUpdate(userID, id);
    console.log(resUser, "resUser");

    if (!resUser) {
      throw new Error("user not found");
    }

    res.status(201).json({
      message: "Delete scussesfully",
      data: resBody,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error Found",
      error: err.message,
    });
  }
};

module.exports = { listPost, listGet, listUpdate, listDelete };
